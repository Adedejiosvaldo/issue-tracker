"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Descriptioon" />

      <Button>
        <Link href="">Submit New Issue</Link>
      </Button>
    </div>
  );
};

export default NewIssuePage;
