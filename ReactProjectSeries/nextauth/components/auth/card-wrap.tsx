"use client"

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
} from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrap = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = true,
}: CardWrapProps) => {
    return (
        <Card className="w-[400px] shadow-md">
          <CardHeader>
              <Header  label={headerLabel}/>
          </CardHeader> 
          <CardContent>
             {children}
          </CardContent>
          {
            showSocial && (
                <CardFooter>
                     <Social/>
                </CardFooter>
            )
          } 
          <CardFooter>
             <BackButton
                label={backButtonLabel} 
                href={backButtonHref}
             />
          </CardFooter>
        </Card>
    );
};
