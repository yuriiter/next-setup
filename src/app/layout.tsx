import { Providers } from "@/components/Providers";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import "@/styles/main.scss";
// import axios from "axios";

// axios.defaults.withCredentials = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [colorscheme] = useColorscheme();

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
