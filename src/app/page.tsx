"use client";
import { Box } from "@/components/Box";

export default function Home() {
  return (
    <main>
      <Box
        className="hello"
        sx={{ backgroundColor: "black", margin: "10px" }}
        component="button"
        onClick={() => alert()}
      >
        Hello world
      </Box>
    </main>
  );
}
