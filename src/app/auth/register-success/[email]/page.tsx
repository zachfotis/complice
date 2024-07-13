interface PageProps {
  params: {
    email: string;
  };
}

export default function RegisterSuccessPage({ params }: PageProps) {
  const userEmail = decodeURIComponent(params.email);

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl">Almost There!</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>
          We have sent you an email at <span className="font-semibold">{userEmail}</span> to verify your account.
        </p>
        <p>Please check your email and click on the link to complete your registration.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-sm">If you don&apos;t see the email, please check your spam folder.</p>
        <p className="text-sm">For any issue, please contact our support team.</p>
      </div>
    </div>
  );
}
