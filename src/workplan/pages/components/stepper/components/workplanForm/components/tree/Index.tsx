import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { Button, Typography } from "@mui/material";
import { IActivityForm, IWorkplan } from "../../Interfaces";
import { CustomTreeItem } from "@components";

interface ITreeProps {
  workplan: IWorkplan[];
}

export const WorkplanTree = ({ workplan }: ITreeProps) => {
  const calculateTotalPercentage = (activities: IActivityForm[]) => {
    return (
      activities.reduce((acc, curr) => {
        return acc + curr.percentage;
      }, 0) + "%"
    );
  };
  return (
    <SimpleTreeView
      aria-label="workplan tree"
      //   defaultExpandedItems={["1"]}
      //   defaultSelectedItems="2"
      slots={{
        expandIcon: ArrowRightIcon,
        collapseIcon: ArrowDropDownIcon,
        // endIcon: () => null,
      }}
      sx={{ flexGrow: 1, maxWidth: "90%", p: 0, m: 0 }}
    >
      {workplan.map((topic, index) => (
        <CustomTreeItem
          itemId={index.toString()}
          label={topic?.activity}
          endSlot={
            <Button sx={{ p: 0 }} onClick={() => console.log("pepepepep")}>
              <EditIcon />
            </Button>
          }
          labelInfo={topic?.percentage + "%"}
        >
          {topic?.activities.map((act, ind) => (
            <CustomTreeItem
              itemId={index.toString() + "_" + ind.toString()}
              label={act?.activity}
              labelInfo={act?.percentage + "%"}
            />
          ))}
          <CustomTreeItem
            itemId={index.toString() + "_total"}
            label={
              <Box
                sx={{
                  fontWeight: "bold",
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                Total actividades: {calculateTotalPercentage(topic?.activities)}
              </Box>
            }
          />
        </CustomTreeItem>
      ))}

      <CustomTreeItem
        itemId={"_total"}
        label={
          <Box
            sx={{
              fontWeight: "bold",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!workplan.length ? (
              <Typography>No hay temas de evaluación</Typography>
            ) : (
              "Total temas de evaluación:" + calculateTotalPercentage(workplan)
            )}
          </Box>
        }
      />
    </SimpleTreeView>
  );
};
