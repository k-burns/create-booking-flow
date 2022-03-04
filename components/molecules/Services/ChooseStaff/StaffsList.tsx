import { Staff } from 'components/molecules/Services/ChooseStaff/Staff'
import { useBookableStaffVariants } from 'lib/state/staff'
import { Box } from '@mui/material'
import { useStaffListStyles } from 'components/molecules/Services/ChooseStaff/useStyles'
import { useCartMethods } from 'lib/state/cart'
import { useActiveSelectedService } from 'lib/state/services'

export const StaffsList = () => {
    const classes = useStaffListStyles()
    const activeSelectedService = useActiveSelectedService()
    const {isCartAvailableBookableItem} = useCartMethods()
    let staffs = useBookableStaffVariants()

    if (staffs && isCartAvailableBookableItem(activeSelectedService?.item)) {
        let staffsWithNoPreference = staffs.concat()
        staffsWithNoPreference.unshift({
            id: null,
            name: 'No Preference',
            description: 'Match with any staff member',
        })
        staffs = staffsWithNoPreference
    }

    return (
        <Box className={classes.root}>
            {staffs?.map((staff) => (
                <Staff key={staff.id} staff={staff} />
            ))}
        </Box>
    )
}
