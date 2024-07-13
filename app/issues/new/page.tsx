"use client";

import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdError } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import IssueSchema from "@/app/ValidationSchemas";
import { z } from "zod";

type IssueForm = z.infer<typeof IssueSchema>;

// interface IssueForm {
//   title: string;
//   description: string;
// }

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(IssueSchema),
  });
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <MdError />{" "}
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className=" space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An error occurred while creating the issue.");
          }
        })}
      >
        <TextField.Root placeholder="Title" as="p" {...register("title")} />
        {errors.title && <Text color="red">{errors.title.message}</Text>}

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        ></Controller>
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}
        <Button className="">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
