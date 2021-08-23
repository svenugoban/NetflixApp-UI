import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://r2---sn-npoeenly.googlevideo.com/videoplayback?expire=1629759959&ei=d9UjYbm2A9SFvdIPhtq3oAI&ip=185.148.159.100&id=o-AIj9Lm6AVkVWkTdGDqlGbS7tXW5SHssmDaZYngOC9Xgf&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=b0KnUydCrt9Zwlb1O8hGOXAG&gir=yes&clen=1049173&ratebypass=yes&dur=10.657&lmt=1509580930695009&fexp=24001373,24007246&c=WEB&n=5aZGEKFGdYke9AAzb&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgFnQG03GKxe5kv2sansfGzYzL6uEH-pW1NUw80LfA1wsCIAMfhJzaZi1xB602tdVVlu9FIPaIRnz-ndlocYGiT57v&rm=sn-4g5ek67l&req_id=8cf2e520f79da3ee&cm2rm=sn-qp5avb5mp5u5-jhc67l,sn-cvhse7l&ipbypass=yes&redirect_counter=3&cms_redirect=yes&mh=tB&mip=2402:4000:11c7:9a99:28e8:1416:59e1:1f29&mm=34&mn=sn-npoeenly&ms=ltu&mt=1629744049&mv=m&mvi=2&pl=48&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAIkQCtqCByONugTQBf8TgLBhvQfgGp39yLnipBc-sanOAiBr8i3oooYGNOqaSxlrpdlJdC---px-N2CvuFZHqouugw%3D%3D"
      />
    </div>
  );
}
