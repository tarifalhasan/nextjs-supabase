import { supabase } from "@/lib/supabase";

export default async function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("views").insert({
      name: "view one",
    });

    if (error) console.log(error);
    if (data) console.log(data);
  };

  setNewView();
  return <h2>Jell</h2>;
}
