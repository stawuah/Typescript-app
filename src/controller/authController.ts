export const Login: RequestHandler = async (req, res, next) => {
  const noteId = req.params.id;

  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid not id");
    }

    if (!noteId) {
      throw createHttpError(404, "note not found");
    }

    const note = await AuthModel.findByIdAndDelete(noteId).exec();

    res.status(204).json({ note });
  } catch (error) {
    next(error);
  }
};
export default {};
