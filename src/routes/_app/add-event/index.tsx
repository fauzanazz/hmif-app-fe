import { createFileRoute } from '@tanstack/react-router';
import { Form } from '~/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { EventSchema, eventSchema } from './-constants';
import { Button } from '~/components/ui/button';
import { DrawerHeader, DrawerTitle, DrawerClose } from '~/components/ui/drawer';
import { useMutation } from '@tanstack/react-query';
import Title from './-components/title';
import Description from './-components/description';
import CalendarGroup from './-components/calendar-group';
import Courses from './-components/course';
import DatePicker from './-components/date-picker';
import Categories from './-components/categories';
import toast from 'react-hot-toast';
import { api } from '~/api/client';

export const Route = createFileRoute('/_app/add-event/')({
  component: AddEventPage,
});

const TOAST_ID = 'add-event-toast';

type ComponentProps = {
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AddEventPage({ setDrawer }: ComponentProps) {
  const form = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      calendarGroupId: '',
      courseId: '',
      title: '',
      description: '',
      category: '',
      start: new Date().toISOString(),
      end: new Date().toISOString(),
    },
  });

  const postEvent = useMutation({
    mutationFn: api.calendar.postCalendarEvent.bind(api.calendar),
    onSuccess: () => {
      toast.success('Event Posted!', { id: TOAST_ID });
      setTimeout(() => {
        setDrawer(false);
      }, 1000);
    },
    onError: () => toast.error('Failed to post event', { id: TOAST_ID }),
  });

  function onSubmit(values: EventSchema) {
    try {
      console.log(values);
      toast.loading('Please wait...', { id: TOAST_ID });
      postEvent.mutate({
        requestBody: {
          calendarGroupId: values.calendarGroupId,
          courseId: values.courseId,
          title: values.title,
          description: values.description,
          category: values.category,
          start: values.start,
          end: values.end,
        },
      });
    } catch (error) {
      console.log(error);
      toast.error('Failed to post event', { id: TOAST_ID });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DrawerHeader className="flex flex-row items-baseline justify-between px-10">
          <DrawerClose
            onClick={() => {
              setDrawer(false);
            }}
          >
            Cancel
          </DrawerClose>
          <DrawerTitle>New Event</DrawerTitle>
          <Button
            variant="link"
            type="submit"
            className="mx-0 px-0 text-[#007AFF]"
          >
            Submit
          </Button>
        </DrawerHeader>
        <div className="divide-y divide-dashed">
          <Title form={form} />
          <Description form={form} />
          <DatePicker form={form} />
          <CalendarGroup form={form} />
          <Courses form={form} />
          <Categories form={form} />
        </div>
      </form>
    </Form>
  );
}
