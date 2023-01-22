interface TestProps {
  name: string;
}

export default function TestComponent(testProps: TestProps) {
  return <div>{testProps.name}</div>;
}
