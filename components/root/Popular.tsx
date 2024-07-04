import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../ProductCard";

const Popular = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col my-[5rem] px-5">
        <h1 className="text-center font-semibold tracking-tight md:text-4xl sm:text-xl text-md ">Popular Products</h1>
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger   value="account">Shirts</TabsTrigger>
          <TabsTrigger value="password">t-shirts</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
        <div className="flex flex-row items-center gap-x-5 mt-10">
        <h1 className="md:text-4xl sm:text-xl text-md font-semibold">
          Shirts
        </h1>
        <Button
          variant="link"
          className="lg:text-lg sm:text-md text-sm text-muted-foreground"
        >
          See more <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
        <ProductCard
          images={[
            "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/XU6DGRvG0p3HIg3UwQqeJcTTcUU.jpg?scale-down-to=1024",
          ]}
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="1"
        />
        <ProductCard
          images={[
            "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/XU6DGRvG0p3HIg3UwQqeJcTTcUU.jpg?scale-down-to=1024",
          ]}
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="2"
        />
        <ProductCard
          images={[
            "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/XU6DGRvG0p3HIg3UwQqeJcTTcUU.jpg?scale-down-to=1024",
          ]}
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="3"
        />
      </div>
        </TabsContent>
        <TabsContent value="password">
        <div className="flex flex-row items-center gap-x-5 mt-10">
        <h1 className="md:text-4xl sm:text-xl text-md font-semibold">
          t-Shirts
        </h1>
        <Button
          variant="link"
          className="lg:text-lg sm:text-md text-sm text-muted-foreground"
        >
          See more <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
        <ProductCard
          images={[
            "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/XU6DGRvG0p3HIg3UwQqeJcTTcUU.jpg?scale-down-to=1024",
          ]}
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="1"
        />
        <ProductCard
          images={[
            "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/XU6DGRvG0p3HIg3UwQqeJcTTcUU.jpg?scale-down-to=1024",
          ]}
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="2"
        />
        <ProductCard
          images={[
            "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024",
            "https://framerusercontent.com/images/XU6DGRvG0p3HIg3UwQqeJcTTcUU.jpg?scale-down-to=1024",
          ]}
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="3"
        />
      </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Popular;
