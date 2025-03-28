type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };

  export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
//to test the error handling state type 123 at the end of users url, this will throw an error

    return (
        <ul className="space-y-4 p-4">
            {users.map((user: User) => (
                <li
                    key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-grey-700"
                >
                    {user.name} {user.email}
                </li>
            ))}
        </ul>
    );
}
