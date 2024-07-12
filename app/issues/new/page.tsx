"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Title" />
      <SimpleMDE placeholder="Descriptioon" />
      <Button>
        <Link href="">Submit New Issue</Link>
      </Button>
    </div>
  );
};

export default NewIssuePage;
