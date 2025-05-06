"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";

export default function LogRocketProvider() {
  useEffect(() => {
    LogRocket.init(
      `${process.env.NEXT_PUBLIC_LOGROCKET_API_ID}/${process.env.NEXT_PUBLIC_LOGROCKET_PROJECT_NAME}`
    );
  }, []);

  return null;
}
