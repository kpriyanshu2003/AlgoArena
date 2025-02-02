import { authOptions } from "@/server/auth/options";
import { getServerSession } from "next-auth";

export const getLearningPathData = async (id) => {
  const data = await db.learningPath.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      sections: {
        include: {
          chapters: true,
        },
      },
    },
  });
  return data;
};

export const checkIfLearningPathIsSaved = async (id) => {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return false
    }
    const isSaved = await db.savedLearningPath.findUnique({
      where: {
        userId_learningPathId: {
          userId: session.user.id,
          learningPathId: id,
        }
      }, 
    })
    return Boolean(isSaved)
  } catch (error) {
    console.error(error);
    return false
  }
}