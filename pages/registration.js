import { useRouter } from "next/router";
export default function Registration() {
  const router = useRouter();
  const { query } = router;

  return (
    <div>
      <h1>Registration</h1>
      <pre>{JSON.stringify({ query }, null, 2)}</pre>
    </div>
  );
}
