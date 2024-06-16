import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function PostList({ post }) {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none">
        <img
          src={post.picture}
          alt={post.title}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">{post.title}</Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">{post.description}</Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Link href={'posts/' + post.slug}>
          <Button>Ler artigo</Button>
        </Link>
        <Typography className="font-normal">January 10</Typography>
      </CardFooter>
    </Card>
  );
}