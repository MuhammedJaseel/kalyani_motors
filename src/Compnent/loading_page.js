function LoadingPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img
          loading="lazy"
          width="170"
          src="https://www.kalyanimotors.com/application/themes/maruti/assets/img/logo.png"
          alt="KAlyani"
        />
        <div style={{ textAlign: "end", color: "#aaaaaa", fontWeight: "500" }}>
          Loading...
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
