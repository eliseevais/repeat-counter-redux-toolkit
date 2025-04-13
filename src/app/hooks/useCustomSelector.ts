import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store.ts";

// export const useMaxValueSelector = useSelector.withTypes<RootState>();
// export const useStartValueSelector = useSelector.withTypes<RootState>();
// export const useResultSelector = useSelector.withTypes<RootState>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
