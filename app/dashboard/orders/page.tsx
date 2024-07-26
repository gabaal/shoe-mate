import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader className="px-7 ">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from Shoe-Mate</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className="font-medium">Gerald Baalham</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  geraldbaalham@live.co.uk
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Successfull</TableCell>
              <TableCell>26/07/2024</TableCell>
              <TableCell className="text-right">£107.99</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
