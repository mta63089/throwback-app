import { getRandomImage } from "@/lib/images";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
export default function FeaturedCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl overflow-hidden border-black w-full h-64 border-2">
      {/* Left Section */}
      <Card className="bg-peach-50 bg-[#FFE6D7] rounded-xl w-2/3 p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold leading-tight">
            Made just for you!
          </h2>
          <p className="text-sm text-muted-foreground">
            Custom pieces you wont find elsewhere
          </p>
          <Button className="bg-black text-white hover:bg-neutral-800">
            Personalise now
          </Button>
        </div>
        <div className="relative flex-1 mt-6 md:mt-0 md:ml-6">
          <Image
            src={getRandomImage()}
            alt="Custom Crowns"
            fill
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>
      </Card>

      {/* Right Section */}
      <Card className="relative w-1/3 p-0 rounded-xl overflow-hidden">
        <Image
          src={getRandomImage()} // replace with your actual image path
          alt="Engraving board"
          fill
          className="object-cover"
          priority
        />
        <CardContent className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-medium">Engraving</h3>
          <p className="text-sm underline">Shop Now</p>
        </CardContent>
      </Card>
    </div>
  );
}
