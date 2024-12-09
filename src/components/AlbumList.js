import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";
function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  console.log(results);

  const handleAddAlbum = (user) => {
    addAlbum(user);
  };
  let content;
  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          onClick={() => {
            handleAddAlbum(user);
          }}
        >
          +Add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
