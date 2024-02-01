import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="[&>.cl-card]:!bg-red-500">
      <SignIn appearance={{  }} />
    </div>
  );
}
