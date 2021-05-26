const Edit = () => {
  return (
    <form style={{ maxWidth: 500, margin: "auto" }}>
      <h1 className="text-muted text-center">Edit</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" name="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea name="message" cols="30" rows="3" className="form-control" />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Update</button>
      </div>
    </form>
  );
};

export default Edit;
