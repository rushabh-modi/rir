interface IPage {
  name: string;
}

export default function Index({ name }: IPage) {
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
}
