# React Router v6 Nested Route Bug

This repository demonstrates a bug in React Router v6 related to nested routes and the `path` prop.  When navigating to a nested route whose parent route doesn't explicitly handle all paths, unexpected behavior occurs.

## Bug Description

The issue arises when attempting to navigate to a deeply nested route that doesn't have a corresponding `path` defined. The `path` prop for the nested route is not correctly handling the parent route's path and hence errors or unexpected components are rendered.

## Reproduction Steps
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/about`. This works fine.
5. Navigate to `/about/nested`.  This will cause the bug to appear.

## Solution
The solution involves utilizing the `useParams` hook and the `Outlet` component to manage and render content to nested routes properly.