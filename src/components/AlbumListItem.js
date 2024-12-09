import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = (album) => {
    removeAlbum(album);
  };
  const header = (
    <div className="flex flex-row justify-between items-center">
      <Button
        className="mr-3"
        loading={results.isLoading}
        onCLick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos
    </ExpandablePanel>
  );
}
export default AlbumListItem;
