import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
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
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = data.map((album) => {
      const header = <div> {album.tittle}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div>
        Albums for {user.name}
        <Button onClick={handleAddAlbum}>+Add album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
