import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
const about = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <p>This is the about section</p>
      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};
export default about;
