"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import cn from 'classnames';

// UI Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { urlSchema } from '@/schemas/urlFormSchema';
import { z } from 'zod';

// Schema

interface ShortenedLink {
  original: string;
  shortened: string;
  copied: boolean;
}

interface Props {
  className?: string;
}

type FormData = z.infer<typeof urlSchema>

const ShortenerForm = ({ className }: Props) => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: '',
    },
  });

  const onSubmit = async (values: FormData) => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(values.url)}`);
      const data = await response.json();
      
      if (data.ok) {
        setShortenedLinks(prev => [
          {
            original: data.result.original_link,
            shortened: data.result.short_link,
            copied: false
          },
          ...prev
        ]);
        form.reset();
      } else {
        throw new Error(data.error || 'Failed to shorten link');
      }
    } catch (error) {
      console.error('Error shortening URL:', error);
      form.setError('url', { 
        type: 'manual',
        message: error instanceof Error ? error.message : 'Failed to shorten link'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(shortenedLinks[index].shortened);
    
    // Update the copied state
    setShortenedLinks(prev => 
      prev.map((link, i) => ({
        ...link,
        copied: i === index ? true : link.copied
      }))
    );
    
    // Reset copied state after 3 seconds
    setTimeout(() => {
      setShortenedLinks(prev => 
        prev.map((link, i) => ({
          ...link,
          copied: i === index ? false : link.copied
        }))
      );
    }, 3000);
  };

  return (
    <section className={cn(className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative -mb-20">
        {/* Form Container */}
        <div 
          className="bg-shortly-voilet rounded-lg p-6 md:p-12 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/bg-shorten-desktop.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 md:gap-6">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="flex-1 flex flex-col">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Shorten a link here..."
                        className={cn("h-12 md:h-14 bg-white px-5 rounded-md text-base focus-visible:ring-0 focus-visible:ring-offset-0" , form.formState.errors.url && "placeholder:text-red-500")}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1 italic" />
                  </FormItem>
                )}
              />
              <Button 
                type="submit"
                variant="cyanPrimary"
                className="h-12 md:h-14 md:w-32 shrink-0 rounded-md font-bold text-base"
                disabled={isLoading}
              >
                {isLoading ? 'Shortening...' : 'Shorten It!'}
              </Button>
            </form>
          </Form>
        </div>
        
        {/* Results List */}
        {shortenedLinks.length > 0 && (
          <div className="mt-16 space-y-4">
            {shortenedLinks.map((link, index) => (
              <div 
                key={index} 
                className="bg-white rounded-md flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden"
              >
                <p className="text-shortly-dark-voilet truncate md:flex-1 p-4 pb-3 md:pb-4 border-b md:border-0 border-shortly-gray/30">
                  {link.original}
                </p>
                <div className="flex flex-col md:flex-row md:items-center gap-3 p-4 pt-3 md:pt-4">
                  <span className="text-shortly-cyan font-medium">
                    {link.shortened}
                  </span>
                  <Button 
                    onClick={() => handleCopy(index)}
                    variant={link.copied ? "secondary" : "cyanPrimary"}
                    className="md:w-24 rounded-md text-sm font-bold"
                  >
                    {link.copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShortenerForm;