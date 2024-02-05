import { useEffect, useState } from "react";
type PromiseCreatorFunction = () => Promise<any>;

export default function usePromise(
  promiseCreator: PromiseCreatorFunction,
  deps: React.DependencyList
) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("running");

    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        console.log(resolved);
        setResolved(resolved);
      } catch (e: any) {
        setError(e);
      }
      setLoading(false);
    };

    process();
  }, deps);

  return [loading, resolved, error];
}
