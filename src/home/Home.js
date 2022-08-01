import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import DummyItemList from "common/components/DummyItemList/DummyItemList";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.warn(error);
    return <h1>{`Errorr: ${error}`}</h1>;
  }

  return (
    <div>
      <button
        onClick={() => {
          router.push("/sample-page");
        }}
      >
        Go To Sample Page
      </button>
      {data.countries.slice(0, 5).map((e, i) => {
        return <DummyItemList key={i} code={e.code} name={e.name} />;
      })}
    </div>
  );
}
