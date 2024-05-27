import useSession from '~/hooks/auth/useSession';

export default function Profile() {
  const user = useSession();
  return (
    <section className="flex w-full items-center gap-4 px-5 py-4">
      <img
        src={user.picture}
        alt="User Profile"
        className="size-[3.3125rem] rounded-full"
      />

      <div>
        <p className="font-bold">{user.fullName}</p>
        <p className="text-[#B0B3B0]">{user.email}</p>
      </div>
    </section>
  );
}
