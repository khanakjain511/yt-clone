export default function VideoCard({ video }) {
  return (
    <div className="cursor-pointer">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="rounded-lg w-full"
      />
      <div className="mt-2">
        <h3 className="font-semibold text-sm">{video.title}</h3>
        <p className="text-gray-600 text-sm">{video.channel}</p>
        <p className="text-gray-500 text-xs">
          {video.views} • {video.timestamp}
        </p>
      </div>
    </div>
  );
}