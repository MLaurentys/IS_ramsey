export default {
  title: "Forests are self-unavoidable",
  description: `
    The Builder can force the Painter to create a monochromatic
    copy of any forest while never creating a graph that is not itself a forest.
    The same as saying that the class of forests is unavoidable.
  `,
  steps: [
    {
      graph: "F?AZO",
      colors: "rrrrrr",
      title: "Simulation clarification:",
      description: `
        In the visual example, the target will be a complete binary tree with
        seven vertices. It shows how to create it from a balanced binary
        tree with six vertices.
      `,
      duration: 6000,
    },
    {
      graph: "F?AZO",
      colors: "rrrrrr",
      title: "Method:",
      description: `
        Note that showing that every tree is unavoidable in the class of
        forests is sufficient. This will be shown via induction in the number of
        vertices.
      `,
      duration: 4000,
    },
    {
      graph: "F?AZO",
      colors: "rrrrrr",
      title: "Let:",
      description: `
        Take any tree T with n vertices, with n > 1. T will be the target.
      `,
      duration: 5000,
    },
    {
      graph: "E?NO",
      colors: "bbbbb",
      title: "Induction Hypotesis",
      description: `
        Take a second tree T', created by removing a leaf of T. Suppose, via
        induction, that the Builder can force the Painter to create a
        monochromatic copy of T'.
      `,
      duration: 5000,
    },
    {
      graph: "K?????EAPcWG",
      colors: "bbbbbbbbbb",
      title: "Induction Step (1/3)",
      description: `
        Since the Builder can force a copy of T', he/she can also force n copies
        of T'.
      `,
      duration: 5000,
    },
    {
      graph: "K?????qoOK@H",
      colors: "bbbbbbbbbbr",
      title: "Induction Step (2/3)",
      description: `
        Connect the parents of the leaf removed.
      `,
      duration: 3000,
    },
    {
      graph: "K?????EAPcWG",
      colors: "bbbbbbbbbb",
      title: "Induction Step (3/3)",
      description: `
        Note that the last edge cannot be either color. It either turns a T'
        into a T, or creates T considering all the added edges.
      `,
      duration: 3000,
    },
    {
      graph: "aDc",
      colors: "bbbbb",
      title: "Therefore",
      description: `
        Since any tree can be constructed via smaller tree, and the case n = 1
        is trivial, any tree is unavoidable in the class of trees.
      `,
      duration: 3000,
    },
  ],
};
