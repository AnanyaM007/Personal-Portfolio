import HeroContent from "../../components/HeroContent";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an asynchronous operation
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Stack sx={{ background: "#F3AF00", minHeight: "100vh" }}>
          <HeroContent />
        </Stack>
      )}
    </>
  )
}
