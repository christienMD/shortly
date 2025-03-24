import { z } from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { urlSchema } from "@/schemas/urlFormSchema";
import { ShortenedLink } from "../pages/HomePage";
import { useState } from "react";

interface Props {
  className?: string;
  shortenedLinks: ShortenedLink[];
  setShortenedLinks: React.Dispatch<React.SetStateAction<ShortenedLink[]>>;
}

type FormData = z.infer<typeof urlSchema>;

const ShortenerForm = ({ className, setShortenedLinks }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    try {
      setIsLoading(true);

      // TinyURL API
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          values.url
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const shortUrl = await response.text();

      setShortenedLinks((prev) => [
        {
          original: values.url,
          shortened: shortUrl,
          copied: false,
        },
        ...prev,
      ]);

      form.reset();
      toast.success("URL shortened successfully!");
    } catch (error) {
      console.error("Error shortening URL:", error);
      form.setError("url", {
        type: "manual",
        message:
          error instanceof Error ? error.message : "Failed to shorten link",
      });
      toast.error(
        error instanceof Error ? error.message : "Failed to shorten link"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("max-w-7xl mx-auto px-6 lg:px-24", className)}>
      {/* Form Container */}
      <div
        className="bg-shortly-voilet rounded-lg p-6 md:p-10 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-shorten-desktop.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-4 md:gap-6"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="flex-1 flex flex-col">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Shorten a link here..."
                      className={cn(
                        "h-12 md:h-14 bg-white px-5 rounded-md text-base focus-visible:ring-0 focus-visible:ring-offset-0",
                        form.formState.errors.url &&
                          "placeholder:text-red-500"
                      )}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <div className="h-2">
                    <FormMessage className="text-red-500 text-sm italic" />
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="cyanPrimary"
              className="h-12 md:h-14 md:w-32 shrink-0 rounded-md font-bold text-base"
              disabled={isLoading}
            >
              {isLoading ? "Shortening..." : "Shorten It!"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ShortenerForm;