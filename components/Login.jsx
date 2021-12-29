import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-black relative ">
      <h1>i am login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src="https://links.papareact.com/3pi"
          width={200}
          height={200}
          className="object-cover rounded-full"
        />

        <button className="bg-yellow-500 rounded-lg p-5 animate-pulse font-bold">
          log in to METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
