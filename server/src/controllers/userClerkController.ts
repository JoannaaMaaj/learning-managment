import { Request, Response } from "express";
import { clerkClient } from "../index";

interface ParamsOnlyString {
  userId: string;
}

export const updateUser = async (
  req: Request<ParamsOnlyString>,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const userData = req.body;
  try {
    const user = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: userData.publicMetadata.userType,
        settings: userData.publicMetadata.settings,
      },
    });

    res.json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
  
};

// PUT /users/clerk/user_123
// from route: router.put("/:userId", updateUser); & index: app.use("/users/clerk", userClerkRoutes);


// req = {
//     params: {
//         userId: "user_123"
//     },

//     body: {
//         "userId": "user_123",
//         publicMetadata: {
//             userType: "student",
//             settings: {
//                 "courseNotifications": true,
//                 ...
//             }
//         }
//     },

//     query: {},

//     headers: {...},

//     cookies: {...}
// }
