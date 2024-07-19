"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

const formSchema = z.object({
  prayer: z.string().min(2).max(200),
});

const PrayerForm = () => {
  const addPrayer = useMutation(api.prayer.addPrayer);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prayer: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    addPrayer({ title: values.prayer });
    // await addBibleVerse();
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-1/2 lg:w-1/3 space-y-3 w-full"
      >
        <FormField
          control={form.control}
          name="prayer"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Enter your prayer request here..."
                  {...field}
                />
              </FormControl>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button className="w-full" size={"lg"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default PrayerForm;
