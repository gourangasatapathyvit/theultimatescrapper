import { TorrentData } from "../../../utility/AllProps";
interface aggObject {
  torrent: TorrentData;
}

export default function Torrent({ torrent }: aggObject) {
  return (
    <div className="torrent">
      <a href={torrent.magnetLink}>
        <span className="name">{torrent.name}</span>
      </a>
      <div className="info">
        <span className="size">{torrent.size}</span>
        <span className="seeders">
          <b>S</b>: {torrent.seed}
        </span>
        <span className="leechers">
          <b>L</b>: {torrent.leech}
        </span>
      
        <span className="uploaded_by">{torrent.uploader}</span>
      </div>
      <div className="actions">
        <a href={torrent.downLoadLink ?torrent.downLoadLink:""}>Download</a>
        {torrent.magnetLink && torrent.magnetLink.startsWith("magnet:?xt=urn:btih:") && (
          <a
            href={
              "https://webtor.io/show?magnet=" +
              encodeURIComponent(torrent.magnetLink)
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Play on browser (Webtor)
          </a>
        )}
      </div>
    </div>
  );
}
