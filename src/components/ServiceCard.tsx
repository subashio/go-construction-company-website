import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}
export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <Card className="!p-0  rounded-md bg-[#d4d4d48a]">
      <CardHeader className="p-0 ">
        <Image
          src={image}
          width={400}
          height={100}
          className="w-full object-contain  object-center rounded-t-lg"
          alt="Services card image for Go-construction"
        />
      </CardHeader>
      <CardContent className="flex flex-col mt-4 text-center  gap-y-4 items-center">
        <CardTitle className="font-bold capitalize">{title}</CardTitle>
        <CardDescription className="max-w-sm  ">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
