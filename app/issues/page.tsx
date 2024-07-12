import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Issues = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </div>
  );
};

export default Issues;
