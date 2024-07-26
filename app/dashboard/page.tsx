import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PartyPopper,
  PoundSterling,
  ShoppingBagIcon,
  User2,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <PoundSterling className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">£100,000</p>
            <p className="text-sx text-muted-foreground">
              Based on 100 charges
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBagIcon className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-sx text-muted-foreground">
              Total sales on Shoe-Mate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="h-5 w-5 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">37</p>
            <p className="text-sx text-muted-foreground">
              Total products created
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2 className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-sx text-muted-foreground">
              Total users signed up
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recent transactions</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>GB</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Gerald Baalham</p>
                <p className="text-sm text-muted-foreground">
                  geraldbaalham@live.co.uk
                </p>
              </div>
              <p className="ml-auto font-medium">+£107.99</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>GB</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Gerald Baalham</p>
                <p className="text-sm text-muted-foreground">
                  geraldbaalham@live.co.uk
                </p>
              </div>
              <p className="ml-auto font-medium">+£107.99</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>GB</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Gerald Baalham</p>
                <p className="text-sm text-muted-foreground">
                  geraldbaalham@live.co.uk
                </p>
              </div>
              <p className="ml-auto font-medium">+£107.99</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>GB</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Gerald Baalham</p>
                <p className="text-sm text-muted-foreground">
                  geraldbaalham@live.co.uk
                </p>
              </div>
              <p className="ml-auto font-medium">+£107.99</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>GB</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Gerald Baalham</p>
                <p className="text-sm text-muted-foreground">
                  geraldbaalham@live.co.uk
                </p>
              </div>
              <p className="ml-auto font-medium">+£107.99</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
