export default function TrustStats({
  stats = [
    { value: "250+", label: "Properties Sold" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ],
}) {
  return (
    <div className="mt-14 flex gap-10 text-white/90">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-xs uppercase tracking-widest text-gray-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
