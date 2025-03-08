import { Request, Response, Router } from "express";
import { UserService } from "./user.service";

const router = Router();
const userService = new UserService();

router.get("/", async (_req: Request, res: Response): Promise<void> => {
  const users = await userService.getAll();
  res.json(users);
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  const user = await userService.getById(parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  await userService.create(req.body);
  res.json({ message: "User created" });
});

router.put("/:id", async (req: Request, res: Response): Promise<void> => {
  await userService.update(parseInt(req.params.id), req.body);
  res.json({ message: "User updated" });
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  await userService.delete(parseInt(req.params.id));
  res.json({ message: "User deleted" });
});

export { router as userRouter };