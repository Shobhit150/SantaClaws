import Link from "next/link"

const Error404 = () => {
    return (
      <div className="text-center flex flex-col justify-center items-center h-screen bg-slate-100">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">Oops! Looks like you are lost.</p>
      <div className="animate-bounce">
        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">Let us get you back <Link href="/" className="text-emerald-400 font-bold ml-1">Home</Link>.</p>
    </div>
    )
  }
  
  export default Error404