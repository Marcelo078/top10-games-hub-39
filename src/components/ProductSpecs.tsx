import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ProductSpecsProps {
  specs: Record<string, string>;
}

const ProductSpecs = ({ specs }: ProductSpecsProps) => {
  return (
    <Card className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-1/3 font-bold text-foreground">Especificação</TableHead>
            <TableHead className="font-bold text-foreground">Detalhes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(specs).map(([key, value], index) => (
            <TableRow key={index} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-semibold text-foreground">{key}</TableCell>
              <TableCell className="text-muted-foreground">{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ProductSpecs;
