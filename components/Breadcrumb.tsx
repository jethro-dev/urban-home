import React from "react";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/router";
import Link from "next/link";
import { GrNext } from "react-icons/gr";
type Props = {};

const BreadcrumbComponent = (props: Props) => {
  const router = useRouter();
  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split("?")[0];
    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const title = subpath;
      return { href, text: title };
    });

    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", text: "Home" }, ...crumblist];
  }

  const breadcrumbs = generateBreadcrumbs();
  console.log(breadcrumbs);

  return (
    <div aria-label="breadcrumb" className="bg-white mb-6 py-6 border-b">
      <div className="flex items-center">
        {breadcrumbs.map((crumb, idx) => (
          <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
        ))}
      </div>
    </div>
  );
};

// Each individual "crumb" in the breadcrumbs list
function Crumb({
  text,
  href,
  last = false,
}: {
  text: string;
  href: string;
  last: boolean;
}) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <h1 className="text-base font-semibold">{text}</h1>;
  }

  // All other crumbs will be rendered as links that can be visited
  return (
    <div className="flex items-center">
      <Link href={href} className="text-base font-semibold hover:underline">
        {text}
      </Link>
      <span className="mx-2">
        <GrNext size={13} />
      </span>
    </div>
  );
}

export default BreadcrumbComponent;
