import { createContext, ReactNode, useState } from "react";

export interface SelectedItem {
  id: string;
}

export const SelectedItemContext = createContext<{
  selectedItem: SelectedItem | null;
  setSelectedItem: (item: SelectedItem) => void;
}>({
  selectedItem: null,
  setSelectedItem: () => {},
});

const SelectedItemProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>({
    id: "",
  });

  const value = {
    selectedItem,
    setSelectedItem,
  };

  return (
    <SelectedItemContext.Provider value={value}>
      {children}
    </SelectedItemContext.Provider>
  );
};

export default SelectedItemProvider;
